import { TextBox } from './InfoTextBox.styled';

export const InfoTextBox = ({ children }) => {
  return (
    <TextBox>
      <p>{children}</p>
    </TextBox>
  );
};
