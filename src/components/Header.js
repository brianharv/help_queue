import React from "react";

function Header(){  {/* remember - no <React.Fragment> because we are only returning one element and not multiple. */}
  return (
    <h1>Help Queue</h1>
  );
}

export default Header;