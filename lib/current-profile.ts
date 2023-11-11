import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";

import { updateProfile} from "@/lib/initial-profile";

export const currentProfile = async () => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  await updateProfile();

  const profile = await db.profile.findUnique({
    where: {
      userId
    }
  });

  return profile;
};

