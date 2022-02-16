import '../styles/globals.css'
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
} from "kbar";

const searchStyle = {
  padding: "12px 16px",
  fontSize: "16px",
  width: "100%",
  outline: "none",
  border: "none",
  background: "rgba(255, 255, 255, 0.98)",
  color: "var(--foreground)",
  borderBottom: "0.5px solid #f0f0f0",
};

const animatorStyle = {
  maxWidth: "600px",
  width: "100%",
  background: "var(--background)",
  color: "var(--foreground)",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.2) ",
};

const groupNameStyle = {
  padding: "8px 20px",
  fontSize: "10px",
  opacity: 1,
  color: "#8f8f8f",
  background: "rgba(255, 255, 255, 0.98)",
};


function RenderResults() {
  const { results } = useMatches();
  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div style={groupNameStyle}>{item}</div>
        ) : (
          <div
            style={{
              background: active ? "#eee" : "rgba(255, 255, 255, 0.98)" ,
              padding: "1.25rem 1.5rem",
              boxShadow: "var(--shadow)",
              //borderLeft: `3px solid ${active ? "transparent" : "transparent"}`,
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              height: "100",
               borderLeft: `0px solid ${
               active ? "var(--foreground)" : "transparent"
             }`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              fontSize: 16,
            }}
          >
            {item.name}
          </div>
        )
      }
    />
  );
}

function MyApp({ Component, pageProps }) {
  const actions = [
    // Navigation
    {
      id: "home",
      name: "Home",
      shortcut: ["r", "h"],
      keywords: "home return h index",
      section: "Navigation",
      subtitle: "Go to pages/_app.js to edit this menu!",
      perform: () => window.open("/", "_self"),
    },
    {
      id: "about",
      name: "About",
      shortcut: ["a"],
      keywords: "about command who a toby me ",
      section: "Navigation",
      perform: () => window.open("/about", "_self"),
    },
    {
      id: "contact",
      name: "Contact",
      shortcut: ["c"],
      keywords: "contact talk hello c",
      section: "Navigation",
      perform: () => window.open("/contact", "_self"),
    },
    // Social
  {
    id: "twitterAction",
    name: "Twitter",
    shortcut: ["t"],
    keywords: "social contact dm t s",
    section: "Social",
    perform: () => window.open("https://twitter.com/DevelopedByToby", "_blank"),
  },
  {
    id: "githubAction",
    name: "Github",
    shortcut: ["g", "h"],
    keywords: "source code g",
    section: "Social",
    perform: () => window.open("https://github.com/itstobez", "_blank"),
  },
  {
    id: "donate",
    name: "Donate",
    shortcut: ["g", "h"],
    keywords: "buy coffee donate b m a c d",
    section: "Social",
    perform: () => window.open("https://www.buymeacoffee.com/tobyb", "_blank"),
  },
  //help
  {
    id: "linkToDocs",
    name: "Docs",
    shortcut: ["d", "h"],
    keywords: "help n d",
    section: "Need a hand?",
    perform: () => window.open("https://conifer-docs.notion.site/60bf9d62f5924a32a0a67ca7f25b124a?v=2fd3563198484fb1a94f218a8ffec31b", "_blank"),
  },
  {
    id: "openIssue",
    name: "Open an issue",
    shortcut: ["o", "i"],
    keywords: "o i issue open feedback",
    section: "Need a hand?",
    perform: () => window.open("https://github.com/ItsTobez/conifer/issues", "_blank"),
  },
  ];

  return (
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner>
            <KBarAnimator style={animatorStyle}>
              <KBarSearch style={searchStyle}/>
              <RenderResults />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        <Component {...pageProps} />
      </KBarProvider>
    );
  }

export default MyApp
