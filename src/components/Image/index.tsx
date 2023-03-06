import { useState } from 'react';
import { forwardRef } from 'react';
import images from '~/assets/image';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
    src: string;
    alt: string;
    className?: string;
    fallback?: string;
};

const Image = forwardRef(
    (
        {
            src,
            alt,
            className,
            fallback: customFallback = images.noImage,
            ...props
        }: Props,
        ref: React.LegacyRef<HTMLImageElement>,
    ) => {
        const [fallback, setFallback] = useState('');
        const handleError = () => {
            setFallback(customFallback);
        };

        return (
            <img
                className={cx('wrapper', className)}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    },
);
export default Image;
