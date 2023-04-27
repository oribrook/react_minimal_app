import { Button, CircularProgress } from "@mui/material";
import { useState } from "react";

export const LoadingButton = ({ loadingTxt, ...props }) => {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      dir="rtl"
      {...props}
      onClick={async (e) => {
        setLoading(true);        
        await props.onClick(e);                
        setLoading(false);        
      }}
    >
      {loading && (
        <CircularProgress
          size={16}
          color="inherit"
          sx={{
            marginInlineEnd: 1,
          }}
        />
      )}
      {loading ? loadingTxt || props.children : props.children}
    </Button>
  );
};
