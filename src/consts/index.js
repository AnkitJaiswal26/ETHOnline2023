import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

export const offers = [
  {
    id: "1",
    assets: "anyTether",
    offers: [
      {
        id: "134",
        assets: "anyTether",
        collateral: "10 ETH",
        Ratio: "1:3",
        Lend_Ammount: "25.00 anyTether",
        Time: "10",
        Payment: 1,
        APR: "3%",
      },
    ],
    liquidity_offers: [],
    price: "$460",
    M_APR: "50%",
  },
  {
    id: "2",
    assets: "FTM",
    offers: [
      {
        id: "13566",
        assets: "FTM",
        collateral: "10 COL",
        Ratio: "1:3",
        Lend_Ammount: "3.00 FTM",
        Time: "40",
        Payment: 5,
        APR: "10%",
      },
      {
        id: "13567",
        assets: "anyTether",
        collateral: "13 COL",
        Ratio: "1:3",
        Lend_Ammount: "5.00 FTM",
        Time: "60",
        Payment: 7,
        APR: '6%',
      },
    ],
    liquidity_offers: [],
    price: "$754",
    M_APR: "60%",
  },
  {
    id: "6",
    assets: "SOL",
    offers: [
      {
        id: "134",
        assets: "SOL",
        collateral: "1 FTM",
        Ratio: "1:5",
        Lend_Ammount: "10.00 SOL",
        Time: "7",
        Payment: 5,
        APR: "2%",
      },
    ],
    liquidity_offers: [],
    price: "$410",
    M_APR: "20%",
  },
];
