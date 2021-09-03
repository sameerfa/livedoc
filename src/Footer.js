import { Button } from "@material-ui/core";
import { GitHub, Print, Info } from "@material-ui/icons";
import { useState } from "react";

export default function Footer() {
  const [modal, setModal] = useState(true);
  const [copied, setCopied] = useState(false);

  const print = () => {
    window.print();
  };
  const copy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  };
  return (
    <div className="footer">
      <a href="https://sameerfa.github.io/livedoc" className="logo">
        <h1>LiveDoc</h1>
      </a>
      <a href="https://github.com/sameerfa/livedoc/tree/master">
        <Button>
          <GitHub />
        </Button>
      </a>
      <Button onClick={print}>
        <Print />
      </Button>
      <Button onClick={() => setModal(true)}>
        <Info />
      </Button>
      {modal ? (
        <div className="modal">
          <h2>Howdy, partner!</h2>
          <ul>
            <li>
              You can share this document with your friends to collaborate live.
            </li>
            <li>
              Data will be saved for a week. You can access it using the same
              link.
            </li>
            <li>You can download/ print file as PDF too.</li>
          </ul>
          <div>
            <Button className="button" onClick={copy}>
              {copied ? "Copied!" : "Copy Link"}
            </Button>
            <Button
              className="button"
              onClick={() => {
                setModal(false);
                setCopied(false);
              }}
            >
              Okay, Cool!
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
