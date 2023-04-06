import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '基础知识',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        在任何领域学习和成长，打好基础都是至关重要的。这也同样适用于计算机科学和编程领域。掌握基础知识是成为一名优秀的程序员的必经之路。
      </>
    ),
  },
  {
    title: '实战',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        学习计算机科学和编程知识时，实战是非常重要的一部分。只有在实际编写代码和应用知识的情况下，才能真正掌握和理解知识。
      </>
    ),
  },
  {
    title: '博客',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        在如今快速发展的数字时代，博客已经成为一个越来越重要的媒介。博客不仅仅是一个记录生活的平台，也是一个展示知识和经验的重要途径。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
