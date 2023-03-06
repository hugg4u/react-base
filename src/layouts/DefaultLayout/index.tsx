import classNames from 'classnames/bind';
import React from 'react';

import styles from './DefaultLayout.module.scss';

type Props = {
    children?: React.ReactNode;
};

const cx = classNames.bind(styles);

export default function DefaultLayout({ children }: Props) {
    return <div className={cx('wrapper')}>{children}</div>;
}
