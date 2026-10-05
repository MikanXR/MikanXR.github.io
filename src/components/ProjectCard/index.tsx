import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

import styles from './styles.module.css';

export type ProjectStatus = 'available' | 'preview' | 'comingSoon';

export type ProjectLink = {
  label: ReactNode;
  to: string;
  primary?: boolean;
};

export type ProjectCardProps = {
  title: string;
  status: ProjectStatus;
  description: ReactNode;
  links?: ProjectLink[];
};

function StatusBadge({status}: {status: ProjectStatus}): ReactNode {
  switch (status) {
    case 'available':
      return (
        <span className={clsx(styles.badge, styles.badgeAvailable)}>
          <Translate id="projectCard.status.available">Available</Translate>
        </span>
      );
    case 'preview':
      return (
        <span className={clsx(styles.badge, styles.badgePreview)}>
          <Translate id="projectCard.status.preview">In development</Translate>
        </span>
      );
    case 'comingSoon':
      return (
        <span className={clsx(styles.badge, styles.badgeComingSoon)}>
          <Translate id="projectCard.status.comingSoon">Coming soon</Translate>
        </span>
      );
  }
}

export default function ProjectCard({
  title,
  status,
  description,
  links = [],
}: ProjectCardProps): ReactNode {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <StatusBadge status={status} />
      </div>
      <p className={styles.description}>{description}</p>
      {links.length > 0 && (
        <div className={styles.links}>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={clsx(
                'button button--sm',
                link.primary ? 'button--primary' : 'button--secondary',
              )}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
