declare module 'tweetnacl-sealedbox-js' {
  interface SealedBox {
    seal(message: Uint8Array | Buffer, publicKey: Uint8Array): Uint8Array;
    open(ciphertext: Uint8Array, publicKey: Uint8Array, secretKey: Uint8Array): Uint8Array | null;
  }
  
  const sealedbox: SealedBox;
  export = sealedbox;
}