export interface IMeal {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
}

export type TSaveMeal = Omit<IMeal, "id" | "slug" | "image"> & { image: File };
