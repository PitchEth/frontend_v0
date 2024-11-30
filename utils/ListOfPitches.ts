export type PitchesTypes = {
  title: string;
  tag: string;
  location: string;
  amount: string;
  status: string;
  imgUrl?: string;
};

export const pitches: PitchesTypes[] = [
  {
    title: "Builders Grant",
    tag: "Grant",
    location: "Online",
    amount: "25k",
    status: "Open",
    imgUrl: "https://cryptologos.cc/logos/starknet-token-strk-logo.png",
  },
  {
    title: "Near MetaBUILD",
    tag: "Hackathon",
    location: "Online",
    amount: "30k",
    status: "Open",
    imgUrl: "https://cryptologos.cc/logos/near-protocol-near-logo.png",
  },
  {
    title: "BNB Chain Innovation Fund",
    tag: "Grant",
    location: "Online",
    amount: "100k",
    status: "Open",
    imgUrl: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
  },
  {
    title: "EthDenver25",
    tag: "Hackathon",
    location: "San Francisco",
    amount: "15k",
    status: "Open",
    imgUrl: "https://cryptologos.cc/logos/starknet-token-strk-logo.png",
  },
  {
    title: "Optimism Growth Experiments",
    tag: "Grant",
    location: "Online",
    amount: "20k",
    status: "Open",
    imgUrl: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.png",
  },
];
