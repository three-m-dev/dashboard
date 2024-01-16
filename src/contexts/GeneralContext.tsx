import { createContext, useState, useEffect } from "react";

interface GeneralState {
  userFullName: string;
  userTitle: string;
  productionTab: string;
  productionDateRange: string;
}

export const GeneralContext = createContext<
  | {
      state: GeneralState;
      setState: React.Dispatch<React.SetStateAction<GeneralState>>;
    }
  | undefined
>(undefined);

export const GeneralProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [state, setState] = useState<GeneralState>({
    userFullName: "",
    userTitle: "",
    productionTab: "",
    productionDateRange: "",
  });

  useEffect(() => {
    const savedState = localStorage.getItem("generalContext");
    if (savedState) {
      setState(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("generalContext", JSON.stringify(state));
  }, [state]);

  return (
    <GeneralContext.Provider value={{ state, setState }}>
      {children}
    </GeneralContext.Provider>
  );
};
