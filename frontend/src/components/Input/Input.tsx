import { ErrorMessage, StyledInput, StyledLabel } from "./Input.styles";

type Props = {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  error?: string;
};

export const Input = ({ id, label, placeholder, type, error }: Props) => (
  <>
    <StyledLabel htmlFor={id}>{label}</StyledLabel>
    <StyledInput placeholder={placeholder} id={id} type={type} />
    <ErrorMessage>{error}</ErrorMessage>
  </>
);
