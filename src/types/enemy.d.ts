interface Enemy {
  id: number;
  rank: number;
  name: string;
  bio: string;
  tags: string[];
  political: string;
  mouvement: string;
  img: string;
  twAccount: string | null;
  twTopTweets: string[] | [];
}
