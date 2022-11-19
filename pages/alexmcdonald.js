export default function almc() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>How Asymmetric Encryption Creates Online Security</h1>
          </div>
          <img
            className='pic'
            src='https://i.imgur.com/BquxT68.png'
            alt='crypto key'
          />
          <span>Image Credit: Wikimedia Commons</span>
          <p className='description'>
            <b>Basic Overview of RSA Asymmetric Encryption - Written by Alex M</b><br></br>
            The difference between symmetric and asymmetric encryption is that symmetric encryption uses the same key to encrypt and decrypt, while asymmetric 
            uses a private key to decrypt and distributes a mathematically related public key to encrypt. In RSA, the private key is composed of two very large prime
            numbers, and the public key is the product of those two numbers, making it an easy operation to get the public key from the private key, but a
            nearly computationally impossible operation to calculate the private key, as the product of the two primes is hundreds of digits long. This can be
            used to make websites secure by having the two entities (the server and the client) exchange a pair of public keys, thus allowing the client to encrypt
            information intended for the server with the server's public key, and vice-versa with the server responding to the client. Only the server holds the private
            key to read the information sent from the client (and there are physical devices to do this called HSMs that physically hold private keys), therefore preventing
            a hacker from intercepting a message and being able to use it. One of the most popular algorithms for asymmetric encryption is RSA (Rivest Shamir Adleman).
            Asymmetric encryption allows for a mathematical sender and receiver as long as the private keys are securely stored, allowing for sensitive information to
            pass through the internet. 
          </p>

          <a className='button' href='/'>
            <p> Back to Home Page</p>
          </a>
        </main>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .pic {
            height: 120px;
            width: 288px;
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}
