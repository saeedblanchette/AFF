const navigationData = [
  {
    title: "OUR STORY",
    url: "/",
    children: [
      { title: "Hommage au fondateur", url: "/", children: [] },
      { title: "Management", url: "/", children: [] },
      { title: "Commitments", url: "/", children: [] },
    ],
  },
  {
    title: "ACTIVITIES",
    url: "/",
    children: [
      {
        title: "CEREAL MILLS",
        url: "activities/cereal-mills",
        children: [
          { title: "MINOTERIE", url: "/activities/cereal-mills/minoterie", children: [] },
          {
            title: "SEMOULERIE",
            url: "/activities/cereal-mills/semoulerie",
            children: [],
          },
          { title: "ORGERIE", url: "/activities/cereal-mills/orgerie", children: [] },
          { title: "MAISERIE", url: "/activities/cereal-mills/maiserie", children: [] },
        ],
      },
      { title: "INDUSTRIE PÂTES & COUSCOUS", url: "/", children: [] },
      { title: "AVICULTURE", url: "/", children: [] },
      {
        title: "NEGOCE",
        url: "/",
        children: [
          { title: "CASAGRAINS", url: "casagrains", children: [] },
          { title: "IMANDY GRAINS", url: "imandy", children: [] },
        ],
      },
    ],
  },
  { title: "Brands", url: "/", children: [] },
  { title: "INVESTORS", url: "/", children: [] },
  { title: "Careers", url: "/", children: [] },
  { title: "Media", url: "/", children: [] },
  { title: "CONTACT", url: "/", children: [] },
];
export default navigationData;
