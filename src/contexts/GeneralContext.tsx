import { createContext, useState, useEffect } from "react";

interface GeneralState {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    title: string;
    department: string;
  };
  permissions: {};
  application: {
    productionTab: string;
    productionDateRange: string;
  };
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
    user: { firstName: "", lastName: "", email: "", title: "", department: "" },
    permissions: {},
    application: { productionTab: "", productionDateRange: "" },
  });

  useEffect(() => {
    const savedState = sessionStorage.getItem("generalContext");
    if (savedState) {
      setState(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("generalContext", JSON.stringify(state));
  }, [state]);

  return (
    <GeneralContext.Provider value={{ state, setState }}>
      {children}
    </GeneralContext.Provider>
  );
};
