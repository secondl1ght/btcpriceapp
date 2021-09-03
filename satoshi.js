export function satoshi() {
  const satoshiQuotes = [
    "Banks must be trusted to hold our money and transfer it electronically, but they lend it out in waves of credit bubbles with barely a fraction in reserve. We have to trust them with our privacy, trust them not to let identity thieves drain our accounts. Their massive overhead costs make micropayments impossible.",
    "A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution.",
    "Governments are good at cutting off the heads of a centrally controlled networks like Napster, but pure P2P networks like Gnutella and Tor seem to be holding their own.",
  ];

  const randomNumber = Math.floor(Math.random() * 3);

  return satoshiQuotes[randomNumber];
}
