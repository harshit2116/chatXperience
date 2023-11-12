import { currentUser, redirectToSignIn } from "@clerk/nextjs";

import { db } from "@/lib/db";

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return redirectToSignIn();
  }

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (profile) {
    return profile;
  }

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      username: user.username || "",
      name:
        user.username && user.username.trim() !== ""
          ? user.username
          : `${user.firstName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newProfile;
};

export const updateProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return redirectToSignIn();
  }

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (profile) {
    let updateData: { username?: string; name?: string; imageUrl?: string } =
      {};

    if (profile.username !== user.username) {
      updateData.username = user.username || "";
    }

    if (profile.name !== user.username) {
      updateData.name = user.username || user.firstName || "";
    }

    if (profile.imageUrl !== user.imageUrl) {
      updateData.imageUrl = user.imageUrl || "";
    }

    if (Object.keys(updateData).length > 0) {
      await db.profile.update({
        where: {
          userId: user.id,
        },
        data: updateData,
      });
    }
  }
};

