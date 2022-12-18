import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import faPalette from '@fortawesome/free-solid-svg-icons/faPalette'
import faFilm from '@fortawesome/fontawesome-pro-solid/faFilm'
import faBrowser from '@fortawesome/fontawesome-pro-regular/faBrowser'
import faRuler from '@fortawesome/free-solid-svg-icons/faRuler'
import faGamepad from '@fortawesome/fontawesome-pro-solid/faGamepad'
import faToolbox from '@fortawesome/free-solid-svg-icons/faToolbox'
import faMobileAlt from '@fortawesome/fontawesome-pro-solid/faMobileAlt'
import faDesktop from '@fortawesome/fontawesome-pro-solid/faDesktop'
import faMousePointer from '@fortawesome/fontawesome-pro-solid/faMousePointer'

import { props } from '../src/gantt-data'
import { getPlace, getTechnology } from '../src/gantt-utils'

function getIcon(type) {
  switch (type) {
    case 'art':
      return faPalette
    case 'film':
      return faFilm
    case 'app':
      return faBrowser
    case 'mobile':
      return faMobileAlt
    case 'design':
      return faRuler
    case 'game':
      return faGamepad
    case 'library':
      return faToolbox
    case 'web':
      return faDesktop
    default:
      return faMousePointer
  }
}

const MONTHS = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
}

function formatDate({ year, month }) {
  if (month) {
    return `${MONTHS[month]} ${year}`
  }
  return `${year}`
}
function formatDates(start, end) {
  if (start.year === end.year && start.month === end.month) {
    return formatDate(start)
  }
  return `${formatDate(start)} - ${formatDate(end)}`
}

function Project({
  name,
  launched,
  launchedDate,
  status,
  type,
  date,
  url,
  startDate,
  endDate,
  place,
  tech,
  places,
  technologies,
}) {
  return (
    <div className={`project ${type}`}>
      <style jsx>{
        /*language=CSS*/ `
          .project {
            display: flex;
            flex-direction: column;
            justify-content: stretch;
            flex-grow: 1;
            height: 100%;
            padding: 8px 10px;
            width: 10em;
            background: #adb8d4;
            border-radius: 4px;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
          }

          .project .name a {
            color: #000;
          }

          .content {
            flex-grow: 1;
          }

          .date,
          .details {
            font-size: 80%;
          }

          .type {
            background: #c9c9c9;
            color: #fff;
            display: inline-block;
            font-weight: bold;
            padding: 2px 4px 3px;
            border-radius: 6px;
            font-size: 80%;
          }

          .art {
            background: #00cac2;
          }

          .film {
            background: #c3c3c3;
          }

          .design {
            background: #e34e85;
          }

          .web {
            background: #f39a00;
          }

          .game {
            background: #d597ff;
          }

          .library {
            background: #4dd188;
          }

          .app {
            background: #4f88ff;
          }

          .mobile {
            background: #99aeff;
          }
        `
      }</style>
      <div className="date">
        <FontAwesomeIcon icon={getIcon(type)} />{' '}
        {formatDates(startDate, endDate)}
      </div>
      <div className="header">
        <strong className="name">
          {url ? <a href={url}>{name}</a> : name}
        </strong>
        {place && ` @ ${getPlace(places, place).name}`}
      </div>
      {status !== 'released' && (
        <div className="date">
          <em>{status}</em>
        </div>
      )}
      <div className="details">
        {tech.map((id) => getTechnology(technologies, id).name).join(', ')}
      </div>
    </div>
  )
}
export async function getStaticProps() {
  return { props }
}

export default ({ yearMonths, places, technologies }) => (
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
        .even-year {
          background: #eee;
        }
        .year {
          vertical-align: top;
          font-weight: bold;
        }
        .month {
          height: 5px;
        }
        table {
          border-spacing: 1px;
          border-collapse: collapse;
        }
        table td {
          vertical-align: top;
          margin: 0;
        }
        tr,
        td {
          height: 1px;
        }
      `
    }</style>
    <table>
      <tbody>
        {yearMonths.map(({ year, month, projects }) => {
          return (
            <tr key={year + '.' + month}>
              {month === 12 ? (
                <td className="year" rowSpan="12">
                  {year}
                </td>
              ) : null}
              <td className="month" />
              {projects.map((project, index) => (
                <td
                  key={index}
                  rowSpan={
                    project.endDate.year * 12 +
                    project.endDate.month -
                    (project.startDate.year * 12 + project.startDate.month) +
                    1
                  }
                >
                  <Project
                    {...project}
                    places={places}
                    technologies={technologies}
                  />
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)
