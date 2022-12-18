export default () => (
  <div id="content">
    <style global jsx>{
      /*language=CSS*/ `
        html {
          font-family: 'Pontano Sans', 'Helvetica Neue', Helvetica, Arial,
            sans-serif;
          color: #000;
          background: #fff;
          font-size: 12pt;
        }
        body {
          max-width: 45em;
          width: 100%;
          margin: 0 auto;
        }

        h1,
        h2 {
          margin: 0;
          padding: 0;
        }

        a {
          color: #fa0f14;
        }

        h1 {
          font-size: 28.9pt;
          margin-top: -0.2em;
          margin-bottom: 0.5em;
        }

        h2 {
          font-size: 15pt;
          text-align: center;
        }

        p {
          margin: 0.6em 0;
        }

        h1,
        h2 {
          font-weight: normal;
          letter-spacing: 0.1em;
        }

        #content {
          position: relative;
          padding: 8em;
        }

        #box1,
        #box2,
        #box3 {
          z-index: -1;
          font-size: 12pt;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          box-sizing: border-box;
          border: solid 1em;
          border-radius: 2em;
        }

        #box1 {
          border-color: rgba(238, 198, 135, 0.4);
          border-top-left-radius: 6em;
          margin: 1em 5em 5em 1em;
        }

        #box2 {
          border-color: rgba(54, 53, 255, 0.4);
          border-top-left-radius: 4em;
          border-bottom-right-radius: 4em;
          margin: 3em;
        }

        #box3 {
          border-color: rgba(250, 15, 20, 0.4);
          border-bottom-right-radius: 6em;
          margin: 5em 1em 1em 5em;
        }

        span.time {
          color: #485277;
          font-size: 80%;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }

        ul {
          margin: 1em 0;
          padding: 0;
        }

        li {
          list-style: none;
          padding-bottom: 0.5em;
        }
      `
    }</style>
    <div id="box1"></div>
    <div id="box2"></div>
    <div id="box3"></div>
    <h1>Marcello Bastéa-Forte</h1>
    <h2>About</h2>
    <p>
      I code, draw, hack, and design. It's hard to say where one starts and the
      other ends.
    </p>
    <p>
      For the freshest, do check my{' '}
      <a rel="me" href="https://github.com/marcello3d">
        github
      </a>
      ,{' '}
      <a rel="me" href="https://hci.social/@marcello3d">
        mastodon
      </a>
      , and, <i>groan</i>,{' '}
      <a rel="me" href="http://twitter.com/marcello3d">
        twitter
      </a>
      .
    </p>
    <p>
      You can email me at marcello<code>@</code>cellosoft<code>.</code>com.
    </p>
    <p>Thanks for visiting!</p>
    <h2>Current projects</h2>
    <ul>
      <li>
        <a href="https://www.descript.com/">Descript</a> &mdash; audio and video
        editing tools <span className="time">(since 2018)</span>
      </li>
      <li>
        <a href="https://github.com/marcello3d/trimerge">trimerge</a> and{' '}
        <a href="https://github.com/marcello3d/trimerge-sync">trimerge-sync</a>{' '}
        &mdash; live collaboration library{' '}
        <span className="time">(since 2019)</span>
      </li>
      <li>
        <a href="https://2draw.net/">2draw.net</a> &mdash; online drawing tools
        + community{' '}
        <small>
          (<a href="https://2draw.net/users/marcello/gallery/">my drawings</a>)
        </small>{' '}
        <span className="time">(since 2002)</span>
      </li>
    </ul>
    <h2>Less active projects</h2>
    <ul>
      <li>
        <a href="https://lascaux.studio/">lascaux sketch 2</a> &mdash; open
        source webgl drawing app <span className="time">(2014 - 2021)</span>
      </li>
    </ul>
    <h2>Past projects</h2>
    <ul>
      <li>
        <a href="http://viv.ai/">viv.ai</a> /{' '}
        <a href="https://bixbydevelopers.com/">Bixby Developer Studio</a> —
        nlp/ai platform <span className="time">(2013 - 2018)</span>
      </li>
      <li>
        <a href="https://npmjs.org/~marcello">various node.js modules</a>{' '}
        <span className="time">(2011 - 2016)</span>
      </li>
      <li>
        <a href="https://github.com/marcello3d/node-mongolian">
          Mongolian DeadBeef
        </a>{' '}
        &mdash; mongodb driver for node.js{' '}
        <span className="time">(2011 to 2012)</span>
      </li>
      <li>
        <a href="http://www.siri.com">Siri</a> — virtual personal assistant{' '}
        <span className="time">(2008 to 2012)</span>
      </li>
      <li>
        <a href="http://jtablet.cellosoft.com/">JTablet Plugin</a> &mdash; Java
        library for accessing graphics tablet input{' '}
        <span className="time">(2003 to 2012)</span>
      </li>
      <li>
        <a href="http://alt.cellosoft.com/">Alt Framework</a> &mdash;
        server-side javascript web framework{' '}
        <span className="time">(2006 to 2009)</span>
      </li>
    </ul>
    <h2>Archived projects</h2>
    <p>
      (courtesy of <a href="https://web.archive.org/">archive.org</a>)
    </p>
    <ul>
      <li>
        <a
          href="https://web.archive.org/web/20101029202045/http://www.cs.unm.edu/~cello/processing/"
          className="unavailable"
        >
          I LIKE PROCESSING
        </a>{' '}
        &mdash; interactive art java applets made with processing{' '}
        <span className="time">(2004 to 2006)</span>
      </li>
      <li>
        <a
          href="https://web.archive.org/web/20130625054816/http://marcello.cellosoft.com/projects/squeal/"
          className="unavailable"
        >
          SQueaL with Delight
        </a>{' '}
        &mdash; xml-based sql schema system prototype{' '}
        <span className="time">(2006)</span>
      </li>
      <li>
        <a
          href="https://web.archive.org/web/20090329155558/http://www.cs.unm.edu/~cello/livingescher/"
          className="unavailable"
        >
          living escher
        </a>{' '}
        &mdash; art exhibit in processing <span className="time">(2004)</span>
      </li>
      <li>
        <a
          href="https://web.archive.org/web/20070527173519/http://www.cs.unm.edu/~cello/maya/readme.html"
          className="unavailable"
        >
          maya
        </a>{' '}
        &mdash; collection of computer animations (also{' '}
        <a href="http://www.youtube.com/user/marcello3d/videos">on youtube</a>){' '}
        <span className="time">(2002 to 2004)</span>
      </li>
      <li>
        <a
          href="https://web.archive.org/web/20130509082207/http://www.cs.unm.edu/~cello/jsgen/"
          className="unavailable"
        >
          jsgen
        </a>{' '}
        &mdash; utility for bridging C++ classes to JS in Spidermonkey{' '}
        <span className="time">(2004)</span>
      </li>
      <li>
        <a href="https://web.archive.org/web/20130625053550/http://marcello.cellosoft.com/art/">
          art/
        </a>{' '}
        &mdash; old art archive <span className="time">(2001 to 2003)</span>
      </li>
    </ul>
    <h2>Have a great day!</h2>
  </div>
)
