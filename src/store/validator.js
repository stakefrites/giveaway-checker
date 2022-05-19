import { defineStore } from "pinia";

export const useValidatorStore = defineStore("validators", {
  state: () => ({
    validators: [
      {
        name: "Juno",
        validator: "junovaloper1uepjmgfuk6rnd0djsglu88w7d0t49lml7kqufu",
        commission: "5%",
        chain: "juno",
        restake: true,
        votingPower: 0,
        decimals: 6,
      },
      {
        name: "Cosmos",
        validator: "cosmosvaloper1uepjmgfuk6rnd0djsglu88w7d0t49lmljdpae2",
        commission: "5%",
        chain: "cosmoshub",
        restake: true,
        votingPower: 0,
        decimals: 6,
      },
      {
        name: "Akash",
        validator: "akashvaloper1uepjmgfuk6rnd0djsglu88w7d0t49lmlsqkfuf",
        commission: "5%",
        chain: "akash",
        restake: true,
        votingPower: 0,
        decimals: 6,
      },
      {
        name: "Evmos",
        validator: "evmosvaloper1pz3mcahcrglf3md4lggax5r95gvmppc6x5w7hw",
        commission: "5%",
        chain: "evmos",
        restake: false,
        votingPower: 0,
        decimals: 18,
      },
      {
        name: "Sifchain",
        validator: "sifvaloper1uepjmgfuk6rnd0djsglu88w7d0t49lmlmxj56z",
        commission: "5%",
        chain: "sifchain",
        restake: false,
        votingPower: 0,
        decimals: 18,
      },
      {
        name: "Lum Network",
        validator: "lumvaloper1kn7zgwex5yr897mp9vy83vm9re53skyhr82s58",
        commission: "10%",
        chain: "lumnetwork",
        restake: true,
        votingPower: 0,
        decimals: 6,
      },
      {
        name: "Chihuahua",
        validator: "chihuahuavaloper1zl4vt84hya03e8hu7dx4q4cvn2ts2xdr685p5g",
        commission: "5%",
        chain: "chihuahua",
        restake: false,
        votingPower: 0,
        decimals: 6,
      },
      {
        name: "Cerberus",
        validator: "cerberusvaloper1zl4vt84hya03e8hu7dx4q4cvn2ts2xdrrnnufr",
        chain: "cerberus",
        restake: true,
        commission: "5%",
        votingPower: 0,
        decimals: 6,
      },
      {
        name: "Nomic",
        validator: "nomic1jndxttq5ykp5zc8g3xwnxmchzjtl7ap2avlwkz",
        commission: "5%",
        chain: "nomic",
        isNomic: true,
        restake: false,
        votingPower: 10878,
        decimals: 6,
      },
    ],
  }),
  getters: {},
  actions: {},
});
