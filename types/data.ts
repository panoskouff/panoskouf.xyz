export type ProjectHighlightIntro = {
  slug?: string;
  kicker?: string;
  title: string;
  description: string;
  projectUrl: string;
  projectCTA?: string;
  githubUrl?: string;
};

/* @todo use srcset once image hosting platform is setup */
export type ProjectImage = {
  src: string;
  width: number;
  height: number;
};

export type Project = ProjectHighlightIntro & { image: ProjectImage };
