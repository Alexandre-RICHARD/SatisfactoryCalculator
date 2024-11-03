import { Card, CardContent, Grid, Typography } from "@mui/joy";
import React from "react";

type PropsType = {
  product: any;
  fullRefs: any;
};

export const IngredientCard = ({ product, fullRefs }: PropsType) => {
  let exists = false;
  if (fullRefs[product.Name] != null) {
    exists = true;
  }
  return (
    <Card
      variant="outlined"
      sx={{
        padding: "3px",
        borderColor:
          Math.floor(product.Amount) === 0
            ? "var(--joy-palette-error-main)"
            : "var(--joy-palette-neutral-outlinedBorder)",
        borderWidth: Math.floor(product.Inventory) === 0 ? "3px" : "1px",
      }}
    >
      <CardContent>
        <Typography
          level="body-md"
          alignSelf="center"
          sx={{ paddingTop: "3px", paddingBottom: "2px" }}
        >
          {product.Name}
        </Typography>
        <Grid
          spacing={2}
          sx={{ paddingTop: "2px" }}
          container
        >
          <Grid>
            <img
              src={
                exists
                  ? `/assets/${fullRefs[product.Name].category}/${
                      product.Name
                    }.png`
                  : undefined
              }
              alt={product.Name}
              style={{ height: "30px", width: "30px" }}
            />
          </Grid>
          <Grid xs>
            <Grid
              spacing={0}
              container
              sx={{ paddingTop: 0 }}
            >
              <Grid xs>
                <Typography level="body-md">Current Consumed</Typography>
              </Grid>
              <Grid>
                <Typography>
                  {`${
                    exists
                      ? fullRefs[product.Name].type === "l"
                        ? `${Math.round(product.CurrentConsumed / 10) / 100} m³`
                        : product.CurrentConsumed.toFixed(2)
                      : product.CurrentConsumed.toFixed(2)
                  }/min`}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              spacing={0}
              container
              sx={{ paddingTop: 0 }}
            >
              <Grid xs>
                <Typography level="body-md">Max Consumed</Typography>
              </Grid>
              <Grid>
                <Typography>
                  {`${
                    exists
                      ? fullRefs[product.Name].type === "l"
                        ? `${Math.round(product.MaxConsumed / 10) / 100} m³`
                        : product.MaxConsumed.toFixed(2)
                      : product.MaxConsumed.toFixed(2)
                  }/min`}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              spacing={0}
              container
              sx={{ paddingTop: 0 }}
            >
              <Grid xs>
                <Typography level="body-md">Efficency Consume</Typography>
              </Grid>
              <Grid>
                <Typography>{product.ConsPercent.toFixed(2)} %</Typography>
              </Grid>
            </Grid>
            <Grid
              spacing={0}
              container
              sx={{
                color:
                  Math.floor(product.Amount) === 0
                    ? "var(--joy-palette-error-main)"
                    : "var(--joy-palette-text-main)",
                paddingY: 0,
              }}
            >
              <Grid xs>
                <Typography level="body-md">Input Inventory</Typography>
              </Grid>
              <Grid>
                {exists
                  ? fullRefs[product.Name].type === "l"
                    ? `${Math.round(product.Amount / 10) / 100} m³`
                    : product.Amount
                  : product.Amount}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
