import React, { ReactElement, forwardRef, FormEvent } from "react";
import styled from "styled-components";
import { color } from "../../styles";

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: 32px;
  width: 100%;
`;

const InputBox = styled.input`
  height: 100%;
  width: 100%;
  background: ${color.borderLightest};
`;

interface InputProps {
  onChange: (string, formEvent: FormEvent<HTMLInputElement>) => void;
}

const Input = forwardRef(
  ({ onChange }: InputProps, ref): ReactElement => {
    const handleChange = (event) => {
      onChange(event.target.value, event);
    };

    return (
      <InputWrapper>
        <InputBox onChange={handleChange} ref={ref} />
      </InputWrapper>
    );
  }
);

export default Input;
