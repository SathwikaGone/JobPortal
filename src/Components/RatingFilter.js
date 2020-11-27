import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

export default function SimpleRating({ defaultValue }) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="read-only"
          size="small"
          value={value}
          readOnly
          style={{ marginBottom: "0px" }}
        />
      </Box>
    </div>
  );
}
