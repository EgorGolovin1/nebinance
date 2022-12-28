import { v4 as uuidv4 } from "uuid";

export const coins = [
  {
    src: "../crypto-items/BTC.svg",
    name: "bitcoin",
    id: uuidv4(),
    abbreviation: "BTC",
    isView: false,
    myAmount: 0,
    annotation: "",
    isEditing: false,
    main: false,
  },
  {
    src: "../crypto-items/BNB.svg",
    name: "bnb",
    id: uuidv4(),
    abbreviation: "BNB",
    isView: false,
    myAmount: 0,
    annotation: "",
    isEditing: false,
    main: false,
  },
  {
    src: "../crypto-items/ADA.svg",
    name: "cardano",
    id: uuidv4(),
    abbreviation: "ADA",
    isView: false,
    myAmount: 0,
    annotation: "",
    isEditing: false,
    main: false,
  },
  {
    src: "../crypto-items/ETH.svg",
    name: "ethereum",
    id: uuidv4(),
    abbreviation: "ETH",
    isView: false,
    myAmount: 0,
    annotation: "",
    isEditing: false,
    main: false,
  },
  {
    src: "../crypto-items/MASK.svg",
    name: "mask",
    id: uuidv4(),
    abbreviation: "MASK",
    isView: false,
    myAmount: 0,
    annotation: "",
    isEditing: false,
    main: false,
  },
  {
    src: "../crypto-items/KLAY.svg",
    name: "klay",
    id: uuidv4(),
    abbreviation: "KLAY",
    isView: false,
    myAmount: 0,
    annotation: "",
    isEditing: false,
    main: false,
  },
  {
    src: "../crypto-items/SOL.svg",
    name: "solana",
    id: uuidv4(),
    abbreviation: "SOL",
    isView: false,
    myAmount: 0,
    annotation: "",
    isEditing: false,
    main: false,
  },
  {
    src: "../crypto-items/TWT.svg",
    name: "Trust Wallet",
    id: uuidv4(),
    abbreviation: "TWT",
    isView: false,
    myAmount: 353,
    annotation: "",
    isEditing: false,
    main: false,
  },
];

const uuid = "nebinance";

const LocalStorageService = () => {
  const save = (data, key) => {
    localStorage.setItem(`${uuid}-${key}`, JSON.stringify(data));
  };

  const get = (key) => {
    const data = localStorage.getItem(`${uuid}-${key}`);

    if (data) {
      return JSON.parse(data);
    }
  };

  const getById = (id, key) => {
    const data = localStorage.getItem(`${uuid}-${key}`);

    if (data) {
      return JSON.parse(data)[id];
    }
  };

  return {
    save,
    get,
    getById,
  };
};

export const localStorageService = LocalStorageService();
