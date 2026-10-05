import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import ProjectCard, {type ProjectCardProps} from '@site/src/components/ProjectCard';

import styles from './index.module.css';

const demoVideoUrl =
  'https://user-images.githubusercontent.com/3753542/186327162-e775ed7c-5caa-484b-afee-804d27fa2b6a.mp4';

const githubLabel = <Translate id="home.link.github">GitHub</Translate>;
const docsLabel = <Translate id="home.link.docs">Docs</Translate>;

const projects: ProjectCardProps[] = [
  {
    title: 'MikanXR',
    status: 'preview',
    description: (
      <Translate id="home.project.mikanxr.description">
        Mixed reality camera calibration and video compositing. The editor
        calibrates a physical camera against your VR tracking and composites
        client application layers over the video feed.
      </Translate>
    ),
    links: [
      {label: docsLabel, to: '/docs/mikanxr', primary: true},
      {label: githubLabel, to: 'https://github.com/MikanXR/MikanXR'},
    ],
  },
  {
    title: 'MikanTrack',
    status: 'comingSoon',
    description: (
      <Translate id="home.project.mikantrack.description">
        GPU hand and upper-body tracking from one or more webcams, streamed
        over OSC for use in game engines.
      </Translate>
    ),
    links: [{label: docsLabel, to: '/docs/mikantrack'}],
  },
  {
    title: 'MikanStudio',
    status: 'comingSoon',
    description: (
      <Translate id="home.project.mikanstudio.description">
        A VTubing studio application built on Unreal Engine and MikanXR.
      </Translate>
    ),
    links: [{label: docsLabel, to: '/docs/mikanstudio'}],
  },
];

const integrations: ProjectCardProps[] = [
  {
    title: 'Unreal Engine',
    status: 'preview',
    description: (
      <Translate id="home.integration.unreal.description">
        Connects Unreal Engine to a running MikanXR editor, mirrors the Mikan
        scene as actors, and publishes render targets back to the compositor.
      </Translate>
    ),
    links: [{label: githubLabel, to: 'https://github.com/brendanwalker/MikanXR_UE'}],
  },
  {
    title: 'Unity',
    status: 'preview',
    description: (
      <Translate id="home.integration.unity.description">
        Connects a Unity application to a running MikanXR editor through the
        MikanXR client API.
      </Translate>
    ),
    links: [{label: githubLabel, to: 'https://github.com/brendanwalker/MikanXR_Unity'}],
  },
  {
    title: 'VNyan',
    status: 'comingSoon',
    description: (
      <Translate id="home.integration.vnyan.description">
        Brings MikanXR mixed reality compositing to the VNyan VTubing
        application.
      </Translate>
    ),
  },
];

function Hero(): ReactNode {
  return (
    <header className={styles.hero}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          MikanXR
        </Heading>
        <p className={styles.heroTagline}>
          <Translate id="home.hero.tagline">
            Open source tools for mixed reality capture, calibration, and
            compositing.
          </Translate>
        </p>
        <div className={styles.heroButtons}>
          <Link
            className="button button--primary button--lg"
            to="https://github.com/MikanXR/MikanXR/releases">
            <Translate id="home.hero.download">Download MikanXR</Translate>
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/mikanxr">
            <Translate id="home.hero.docs">Read the docs</Translate>
          </Link>
        </div>
        <p className={styles.notice}>
          <strong>
            <Translate id="home.hero.notice.title">Under development.</Translate>
          </strong>{' '}
          <Translate id="home.hero.notice.body">
            MikanXR is still heavily under construction and is not really in a
            usable state yet. Expect rough edges.
          </Translate>
        </p>
      </div>
    </header>
  );
}

function Demo(): ReactNode {
  return (
    <section className="container">
      <figure className={styles.demo}>
        <a href={demoVideoUrl}>
          <img
            src={useBaseUrl('/img/demo.png')}
            alt={translate({
              id: 'home.demo.alt',
              message:
                'The MikanXR editor calibrating a camera against a tracked calibration mat',
            })}
          />
        </a>
        <figcaption>
          <Translate id="home.demo.caption">
            Camera calibration in the MikanXR editor. Click to play the demo
            video.
          </Translate>
        </figcaption>
      </figure>
    </section>
  );
}

function CardSection({
  title,
  intro,
  cards,
}: {
  title: ReactNode;
  intro: ReactNode;
  cards: ProjectCardProps[];
}): ReactNode {
  return (
    <section className={clsx('container', styles.section)}>
      <Heading as="h2">{title}</Heading>
      <p className={styles.sectionIntro}>{intro}</p>
      <div className={styles.grid}>
        {cards.map((card) => (
          <ProjectCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}

function Contact(): ReactNode {
  return (
    <section className={clsx('container', styles.section)}>
      <Heading as="h2">
        <Translate id="home.contact.title">Get in touch</Translate>
      </Heading>
      <p className={styles.sectionIntro}>
        <Translate
          id="home.contact.body"
          values={{
            email: <Link to="mailto:brendan@mikanxr.org">brendan@mikanxr.org</Link>,
            issues: (
              <Link to="https://github.com/MikanXR/MikanXR/issues">
                <Translate id="home.contact.issues">GitHub issues</Translate>
              </Link>
            ),
          }}>
          {'Report bugs and request features through {issues}. For anything else, email {email}.'}
        </Translate>
      </p>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({id: 'home.meta.title', message: 'Mixed reality tools'})}
      description={translate({
        id: 'home.meta.description',
        message:
          'Open source tools for mixed reality camera calibration, tracking, and video compositing.',
      })}>
      <Hero />
      <main>
        <Demo />
        <CardSection
          title={<Translate id="home.projects.title">Projects</Translate>}
          intro={
            <Translate id="home.projects.intro">
              Standalone applications in the MikanXR family.
            </Translate>
          }
          cards={projects}
        />
        <CardSection
          title={<Translate id="home.integrations.title">Engine integrations</Translate>}
          intro={
            <Translate id="home.integrations.intro">
              Plugins that connect game engines and VTubing applications to the
              MikanXR editor.
            </Translate>
          }
          cards={integrations}
        />
        <Contact />
      </main>
    </Layout>
  );
}
