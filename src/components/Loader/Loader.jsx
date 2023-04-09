import { LoaderBox } from './Loader.styled';

const { Oval } = require('react-loader-spinner');

export const Loader = () => {
  return (
    <LoaderBox>
      <Oval
        height={30}
        width={30}
        color="#6190a9"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#98c1d6cc"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </LoaderBox>
  );
};
