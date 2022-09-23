var args = process.argv.slice(2);
const publicKey = args[0];

const fromAirDropSignature = await connection.requestAirdrop(
    new PublicKey(publicKey),
    2 * LAMPORTS_PER_SOL
);
