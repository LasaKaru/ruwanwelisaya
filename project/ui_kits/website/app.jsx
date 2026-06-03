/* eslint-disable no-undef */
/* app.jsx — top-level router shell */

function App() {
  const [route, setRoute] = React.useState("home");

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [route]);

  let screen;
  let transparentTop = false;
  if      (route === "home")       { screen = <HomePage onNavigate={setRoute}/>;       transparentTop = true; }
  else if (route === "events")     { screen = <EventsPage onNavigate={setRoute}/>; }
  else if (route === "gallery")    { screen = <GalleryPage onNavigate={setRoute}/>; }
  else if (route === "blog")       { screen = <BlogPage onNavigate={setRoute}/>; }
  else if (route === "community")  { screen = <CommunityPage onNavigate={setRoute}/>; }
  else if (route === "donate")     { screen = <DonatePage onNavigate={setRoute}/>; }
  else if (route === "about")      { screen = <AboutPage/>; }
  else if (route === "contact")    { screen = <ContactPage/>; }
  else if (route === "privacy")    { screen = <PrivacyPage/>; }

  const label = `${route[0].toUpperCase()}${route.slice(1)}`;

  return (
    <div data-screen-label={label}>
      <Navbar route={route} onNavigate={setRoute} transparentTop={transparentTop}/>
      <main className="rw-main">{screen}</main>
      <Footer onNavigate={setRoute}/>
      <AdminPanel/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
