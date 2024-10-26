export interface NavLinkData {
  id: number;
  title: string;
  url: string;
}

export const navLinkData: NavLinkData[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Properties",
    url: "/properties",
  },
];
