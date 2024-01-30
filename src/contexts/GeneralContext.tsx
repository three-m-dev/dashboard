import { createContext, useState, useEffect } from 'react';

interface GeneralState {
  employee: any | null;
  displayMode: 'production-display' | 'general';
}

export const GeneralContext = createContext<
  | {
      state: GeneralState;
      setState: React.Dispatch<React.SetStateAction<GeneralState>>;
    }
  | undefined
>(undefined);

export const GeneralProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [state, setState] = useState<GeneralState>(() => {
    const savedState = localStorage.getItem('generalContext');
    if (savedState) {
      return JSON.parse(savedState);
    } else {
      return {
        employee: null,
        displayMode: 'general',
      };
    }
  });

  useEffect(() => {
    localStorage.setItem('generalContext', JSON.stringify(state));
  }, [state]);

  return <GeneralContext.Provider value={{ state, setState }}>{children}</GeneralContext.Provider>;
};
