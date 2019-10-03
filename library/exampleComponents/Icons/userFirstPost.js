import React from 'react';
import PropTypes from 'prop-types';

export default function UserFirstPost(props) {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="512px"
            height="512px"
            viewBox="0 0 512 512"
            version="1.1"
        >
            <g id="pages" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="attach" fillRule="nonzero">
                    <path
                        d="M512,256 C512,397.386719 397.386719,512 256,512 C114.613281,512 0,397.386719 0,256 C0,114.613281 114.613281,0 256,0 C397.386719,0 512,114.613281 512,256 Z"
                        fill="#2864F0"
                    />
                    <path
                        d="M512,256 C512,232.246094 508.75,209.253906 502.695312,187.429688 L392.71875,77.171875 L375.269531,60 L299.855469,51.738281 L128.5,419.5 L218.21875,509.21875 C230.550781,511.042969 243.160156,512 256,512 C397.386719,512 512,397.386719 512,256 Z"
                        fill="#27488F"
                    />
                    <polygon
                        fill="#FFD400"
                        points="128.5 89.140625 369.878906 89.140625 369.878906 419.5 128.5 419.5"
                    />
                    <polygon
                        fill="#FFA300"
                        points="255.808594 89.140625 369.878906 89.140625 369.878906 419.5 255.808594 419.5"
                    />
                    <polygon
                        fill="#FFA300"
                        points="154.898438 118.457031 392.730469 77.179688 436.164062 327.445312 198.332031 368.722656"
                    />
                    <polygon
                        fill="#FA5D0F"
                        points="392.71875 77.171875 255.808594 100.9375 255.808594 358.734375 436.152344 327.429688"
                    />
                    <path
                        d="M327.625,38.5 C296.988281,38.5 271.347656,60.265625 265.332031,89.140625 L286.714844,89.140625 C292.234375,71.804688 308.484375,59.207031 327.625,59.207031 C351.292969,59.207031 370.550781,78.464844 370.550781,102.132812 L370.550781,224.734375 C370.550781,239.199219 358.78125,250.972656 344.3125,250.972656 C329.847656,250.972656 318.074219,239.199219 318.074219,224.734375 L318.074219,108.128906 C318.074219,103.191406 322.089844,99.179688 327.023438,99.179688 C331.957031,99.179688 335.96875,103.195312 335.96875,108.128906 L335.96875,207.003906 L356.675781,207.003906 L356.675781,108.128906 C356.675781,91.777344 343.375,78.472656 327.023438,78.472656 C310.671875,78.472656 297.367188,91.777344 297.367188,108.128906 L297.367188,224.734375 C297.367188,250.617188 318.429688,271.679688 344.3125,271.679688 C370.199219,271.679688 391.257812,250.617188 391.257812,224.734375 L391.257812,102.132812 C391.257812,67.042969 362.714844,38.5 327.625,38.5 L327.625,38.5 Z"
                        fill="#FFFFFF"
                    />
                    <g id="Group" transform="translate(327.000000, 38.000000)" fill="#E9EDF5">
                        <path d="M0.832031,0.503906 L0.832031,21.210938 C24.40625,21.324219 43.550781,40.53125 43.550781,64.128906 L43.550781,186.734375 C43.550781,201.199219 31.78125,212.96875 17.3125,212.96875 C11.074219,212.96875 5.339844,210.777344 0.832031,207.128906 L0.832031,230.683594 C5.964844,232.613281 11.515625,233.675781 17.3125,233.675781 C43.199219,233.675781 64.257812,212.617188 64.257812,186.734375 L64.257812,64.132812 C64.257812,29.113281 35.824219,0.617188 0.832031,0.503906 L0.832031,0.503906 Z" />
                        <path d="M8.96875,70.125 L8.96875,169.003906 L29.675781,169.003906 L29.675781,70.125 C29.675781,54.046875 16.808594,40.925781 0.832031,40.492188 L0.832031,61.21875 C5.386719,61.632812 8.96875,65.46875 8.96875,70.125 Z" />
                    </g>
                </g>
            </g>
        </svg>
    );
}

UserFirstPost.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

UserFirstPost.defaultProps = {
    className: undefined,
    style: undefined,
};
