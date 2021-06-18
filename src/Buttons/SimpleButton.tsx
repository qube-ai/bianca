import React, { FC } from 'react';

export interface ButtonProps {
  text: string;
}

export const SimpleButton: FC<ButtonProps> = ({ text }) => {
  return <button className="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-blue-300 hover:from-pink-400 hover:to-indigo-400">{text}</button>;
};