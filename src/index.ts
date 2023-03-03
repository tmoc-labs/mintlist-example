import { ORCA_DEFAULT_MINTLIST, ORCA_DEFAULT_TOKENLIST } from "@orca-so/orca-mintlists-demo";
import { Token, TokenFetcher, Tokenlist } from "@orca-so/token-sdk";
import { Connection } from "@solana/web3.js";

async function main() {
  const connection = new Connection("https://api.mainnet-beta.solana.com");
  const fetcher = TokenFetcher.from(connection, { cache: toCache(ORCA_DEFAULT_TOKENLIST) });
  const tokens = await fetcher.findMany(ORCA_DEFAULT_MINTLIST.mints);
  console.log(tokens);
}

function toCache(tokenlist: Tokenlist): Record<string, Token> {
  return Object.fromEntries(tokenlist.tokens.map((token) => [token.mint, token]));
}

main().then(() => {
  console.log("done");
});
