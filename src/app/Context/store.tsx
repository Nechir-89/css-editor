'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState
} from 'react';


// type DataType = {
//   css: string
// }

export interface ContextProps {
  css: string,
  setCss: Dispatch<SetStateAction<string>>
}

// step 01: create context
const CssContext = createContext<ContextProps>({
  css: '',
  setCss: (): string => ''
})


// step 02: create context provider
type Prop = {
  children: any
}

export const CssContextProvider = ({ children }: Prop) => {
  // specify data with useState hook
  const [css, setCss] = useState<string>('');

  return (
    <CssContext.Provider value={{ css, setCss }}>
      {children}
    </CssContext.Provider>
  )
}
// step 03: create custom hook
export const useCssContext = () => useContext(CssContext);
