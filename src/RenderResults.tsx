import {
    // ...
    KBarResults,
    useMatches,
    NO_GROUP,
  } from "kbar";
  import Typography from '@mui/material/Typography';

  
  function RenderResults() {
    const { results } = useMatches();
  
    return (
      <KBarResults
        items={results}
        onRender={({ item, active }) =>
          typeof item === "string" ? (
            <Typography variant="h4" gutterBottom>{item}</Typography>
          ) : (
            <Typography variant="h4" gutterBottom style={{
                background: active ? "#eee" : "transparent",
              }}>
              {item.name}
              </Typography>
          )
        }
      />
    );
  };

  export default RenderResults;