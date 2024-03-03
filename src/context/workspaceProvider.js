"use client";
import React, { createContext, useContext, useState } from "react";

// Create context
export const WorkspaceContext = createContext({});

// Custom hook to use context
export const useWorkspaceContext = () => {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new Error(
      "useWorkspaceContext must be used within a WorkspaceProvider"
    );
  }
  return context;
};

// Provider component
export const WorkspaceProvider = ({ children }) => {
  const [whiteBoard, setWhiteBoard] = useState(true);
  const [notesBoard, setNotesBoard] = useState(true);
  const [instantEvaluation, setInstantEvaluation] = useState(true);
  const [evaluationMatrix, setEvaluationMatrix] = useState(true);
  const [chats, setChats] = useState(true);
  const [sidebar, setSidebar] = useState(true);

  return (
    <WorkspaceContext.Provider
      value={{
        whiteBoard,
        setWhiteBoard,
        notesBoard,
        setNotesBoard,
        instantEvaluation,
        setInstantEvaluation,
        evaluationMatrix,
        setEvaluationMatrix,
        chats,
        setChats,
        sidebar,
        setSidebar,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};
