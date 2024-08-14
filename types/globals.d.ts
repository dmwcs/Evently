export {};

declare global {
  interface CustomJwtSessionClaims {
    dbId?: string;
  }
}
