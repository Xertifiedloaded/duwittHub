import { GoTrophy } from 'react-icons/go';
import { leaderBoard } from '../../../utils/utilities';

const LeaderBoard = () => {
  const getOrdinalNumber = (n) => {
    let number;
    if (10 <= n && n <= 20) {
      number = n + 'th';
      return number;
    } else if (n % 10 === 1) {
      number = n + 'st';
      return number;
    } else if (n % 10 === 2) {
      number = n + 'nd';
      return number;
    } else if (n % 10 === 3) {
      number = n + 'rd';
      return number;
    } else {
      number = n + 'th';
      return number;
    }
  };

  return (
    <div>
      <ol>
        {leaderBoard.map((leader, index) => {
          let initials = leader.name
            .split(' ')
            .map((word) => word[0])
            .join('');

          return (
            <div key={leader.id}>
              <li className="flex justify-between items-center my-2 ">
                <div
                  className={`flex items-center ${
                    index === 0 ? 'gap-8' : 'gap-7'
                  }`}
                >
                  <div>{index + 1}.</div>

                  <div className="1500px:w-[50px] 1500px:h-[50px] rounded-full bg-[#001c15] flex items-center justify-center ">
                    <p className="1500px:text-[16px] 1500px:leading-[32px] text-[#00FEA8] ">
                      {initials}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <p className="1500px:text-[20px] 1500px:leading-[50px] font-[600]">
                    {leader.name}
                  </p>
                  <p className="mt-[-18px] 1500px:text-[16px] 1500px:leading-8">
                    {leader.points} points
                  </p>
                </div>

                <div className="relative">
                  <GoTrophy size={40} />

                  <p className="absolute 1500px:text-[8px] top-[6px] left-[50%] transform translate-x-[-50%] font-[600] ">
                    {getOrdinalNumber(index + 1)}
                  </p>
                </div>
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
};

export default LeaderBoard;
