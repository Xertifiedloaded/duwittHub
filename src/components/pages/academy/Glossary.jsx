import { useEffect, useState } from 'react';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { alphabets } from '../../../utils/utilities';

const Glossary = () => {
  const [active, setActive] = useState(0);
  const [displayCount, setDisplayCount] = useState(10);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

  useEffect(() => {
    const resizeScreen = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    window.addEventListener('resize', resizeScreen);

    return () => {
      window.addEventListener('resize', resizeScreen);
    };
  }, []);

  return (
    <section className="w-[90%] mx-auto mt-[40px] 1500px:mt-[90px] ">
      <div className="flex items-center gap-3">
        <IoArrowBackCircleOutline size={23} className="cursor-pointer" />
        <h2 className="font-[400] text-[12px] 800px:text-[16px] 1500px:text-[20px] 1500px:leading-[27.2px]">
          Go Back To Academy
        </h2>
      </div>

      <div className="ml-2 pt-7">
        <h1 className="text-[24px] leading-8 800px:text-[36px] 1500px:text-[45px] font-[700] 1500px:leading-[60px]">
          Glossary
        </h1>

        <div className="pt-3 flex flex-wrap items-end gap-2">
          {isSmallScreen
            ? alphabets.slice(0, displayCount).map((alphabet, index) => (
                <div
                  key={index}
                  className={`border border-[#000] px-2 font-[700] text-[18px] 800px:text-[21px] 1500px:text-[24px] 1500px:leading-[32.68px] cursor-pointer ${
                    active === index && 'bg-[#00FEA8]'
                  }`}
                  onClick={() => setActive(index)}
                >
                  {alphabet}
                </div>
              ))
            : alphabets.map((alphabet, index) => (
                <div
                  key={index}
                  className={`text-[#000000] border border-[#000] px-2 font-[700] text-[18px] 800px:text-[21px] 1500px:text-[24px] 1500px:leading-[32.68px] cursor-pointer ${
                    active === index && 'bg-[#00FEA8]'
                  }`}
                  onClick={() => setActive(index)}
                >
                  {alphabet}
                </div>
              ))}

          {isSmallScreen && (
            <div
              className="text-[12px] leading-4 800px:text-[] text-[#00FEA8]"
              onClick={() => {
                setDisplayCount((prevDisplayCount) =>
                  prevDisplayCount === 10 ? 26 : 10
                );
              }}
            >
              {displayCount === 10 ? 'Show more..' : 'Show less'}
            </div>
          )}
        </div>

        <div className="w-[90%] flex flex-col py-6 gap-6">
          <div>
            <h3 className="text-[24px] leading-[32px] 800px:text-[32px] 1200px:text-[40px] 1500px:text-[48px] 1500px:leading-[65.37px] text-[#000000] font-bold">
              Aa
            </h3>

            <div className="text-[12px] leading-[18px] 800px:text-[16px] 800px:leading-6 1200px:text-[20px] 1200px:leading-7 1500px:text-[24px] 1500px:leading-[32px] ">
              <p>
                <span className="font-bold">Address:</span> An address is
                similar to a traditional bank account. It is a unique
                destination through which crypto users can send and receive
                digital currencies. It usually consists of alphanumeric keys.
              </p>
              <p>
                <span className="font-bold">Address Delegation</span>: A person
                rather than holding some crypto tokens idly in a wallet entrusts
                it to a staker so it can be used to validate transactions.
              </p>
              <p>
                <span className="font-bold">AFK</span>: An acronym for “Away
                From Keyboard”. It is used on social media platforms like
                Twitter where people share their trading activity to notify
                users that they would be away for some time.
              </p>

              <p>
                <span className="font-bold">Algorithms</span>: A set of rules
                embedded into a computer software to enable it to perform
                specific functions.
              </p>

              <p>
                <span className="font-bold">All Time High (ATH) </span>: The
                highest price ever attained by a cryptocurrency
              </p>

              <p>
                <span className="font-bold">All Time Low (ATL)</span>: The
                lowest price ever attained by a cryptocurrency
              </p>

              <p>
                <span className="font-bold">Alphanumeric</span>: This consists
                of both alphabets and numbers.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[24px] leading-[32px] 800px:text-[32px] 1200px:text-[40px] 1500px:text-[48px] 1500px:leading-[65.37px] text-[#000000] font-bold">
              Bb
            </h3>

            <div className="text-[12px] leading-[18px] 800px:text-[16px] 800px:leading-6 1200px:text-[20px] 1200px:leading-7 1500px:text-[24px] 1500px:leading-[32.68px] ">
              <p>
                <span className="font-bold">Bag:</span> A crypto slang used to
                refer to large quantities of cryptocurrencies in a trader’s
                portfolio.
              </p>

              <p>
                <span className="font-bold">Bagholder:</span> A crypto slang
                used to refer to an investor who continuously holds large
                quantities of cryptocurrencies regardless of their performance
                or price changes.
              </p>

              <p>
                <span className="font-bold">Batch Auction:</span> This refers to
                the accumulation of individual orders, which are grouped
                together and executed simultaneously.
              </p>

              <p>
                <span className="font-bold">Bear:</span> A person who expects
                the market to decline.
              </p>

              <p>
                <span className="font-bold">Bearish:</span> When the sentiments
                surrounding a cryptocurrency predict a price drop, it is said to
                be bearish.
              </p>

              <p>
                <span className="font-bold">Bear Market:</span> This occurs when
                there is a prolonged decrease in the value of a cryptocurrency
                or asset.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[24px] leading-[32px] 800px:text-[32px] 1200px:text-[40px] 1500px:text-[48px] 1500px:leading-[65.37px] text-[#000000] font-bold">
              Cc
            </h3>

            <div className="text-[12px] leading-[18px] 800px:text-[16px] 800px:leading-6 1200px:text-[20px] 1200px:leading-7 1500px:text-[24px] 1500px:leading-[32px] ">
              <p>
                <span className="font-bold">Candlestick:</span> A graph type
                that shows the change in price over time. Each candle shows the
                opening price, closing price, high, and low. This graph is also
                called as “candles”.
              </p>
              <p>
                <span className="font-bold">Cap:</span> An abbreviation for
                market capitalization.
              </p>
              <p>
                <span className="font-bold">Capital:</span> Reference to the
                amount of funds an individual wishes to invest in an asset or
                financial scheme.
              </p>
              <p>
                <span className="font-bold">Cash:</span> A physical form of a
                currency, such as banknotes or coins.
              </p>
              <p>
                <span className="font-bold">Casper:</span> This refers to the
                Ethereum Proof of Stake (PoS) Protocol that was designed to
                replace Proof of Work (PoW).
              </p>
              <p>
                <span className="font-bold">CBDC:</span> An acronym for “Central
                Bank Digital Currency” which refers to a digital currency issued
                by the central bank of a nation. Their value is pegged to the
                local currency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glossary;
