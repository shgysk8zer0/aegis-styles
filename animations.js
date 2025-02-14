import { css } from '@aegisjsproject/parsers/css.js';

export const transform = css`.transform-origin-center {
	transform-origin: center;
}

.transform-origin-top {
	transform-origin: top;
}

.transform-origin-bottom {
	transform-origin: bottom;
}

.transform-origin-left {
	transform-origin: left;
}

.transform-origin-right {
	transform-origin: right;
}

.transform-origin-top-center {
	transform-origin: top center;
}

.transform-origin-top-left {
	transform-origin: top left;
}

.transform-origin-top-right {
	transform-origin: top right;
}

.transform-origin-bottom-left {
	transform-origin: bottom left;
}

.transform-origin-bottom-right {
	transform-origin: bottom right;
}`;

export const transition = css`.transition-linear {
	transition-timing-function: linear;
}

.transition-ease {
	transition-timing-function: ease;
}

.transition-ease-in {
	transition-timing-function: ease-in;
}

.transition-ease-out {
	transition-timing-function: ease-out;
}

.transition-ease-in-out {
	transition-timing-function: ease-in-out;
}

.transition-speed-blink {
	transition-duration: var(--aegis-blink-speed, 200ms);
}

.transition-speed-fast {
	transition-duration: var(--aegis-fast-speed, 400ms);
}

.transition-speed-normal {
	transition-duration: var(--aegis-normal-speed, 600ms);
}

.transition-speed-slow {
	transition-duration: var(--aegis-slow-speed, 800ms);
}

.transition-speed-crawl {
	transition-duration: var(--aegis-crawl-speed, 1600ms);
}

.transition-none {
	transition-property: none;
}

.transition-all {
	transition-property: all;
}

.transition-transform {
	transition-property: transform;
}

.transition-opacity {
	transition-property: opacity;
}

.transition-filter {
	transition-property: filter;
}

.transition-background-position {
	transition-property: background-position;
}

.transition-top {
	transition-property: top;
}

.transition-right {
	transition-property: right;
}

.transition-bottom {
	transition-property: bottom;
}

.transition-left {
	transition-property: left;
}

.transition-margin {
	transition-property: margin;
}

.transition-padding {
	transition-property: padding;
}

.transtion-color {
	transition-property: color;
}

.transition-background-color {
	transition-property: background-color;
}

.transition-color {
	transition-property: color;
}

.transition-background {
	transition-property: background;
}


.transition-width {
	transition-property: width;
}

.transition-height {
	transition-property: height;
}

.transition-max-width {
	transition-property: max-width;
}

.transition-max-height {
	transition-property: max-height;
}

.transition-stagger > :nth-child(5n+1) {
	transition-delay: calc(1 * var(--aegis-transition-stagger, 200ms));
}

.transition-stagger > :nth-child(5n+2) {
	transition-delay: calc(2 * var(--aegis-transition-stagger, 200ms));
}

.transition-stagger > :nth-child(5n+3) {
	transition-delay: calc(3 * var(--aegis-transition-stagger, 200ms));
}

.transition-stagger > :nth-child(5n+4) {
	transition-delay: calc(4 * var(--aegis-transition-stagger, 200ms));
}

.transition-stagger > :nth-child(5n+5) {
	transition-delay: calc(5 * var(--aegis-transition-stagger, 200ms));
}`;

export const animate = css`.animation-trampoline {
	animation-name: trampoline;
}

.animation-fade-in {
	animation-name: fade-in;
}

.animation-fade-out {
	animation-name: fade-out;
}

.animation-shrink {
	animation-name: shrink;
}

.animation-grow {
	animation-name: grow;
}

.animation-fly-in {
	animation-name: fly-in;
}

.animation-slide-up {
	animation-name: slide-up;
}

.animation-flip-down {
	animation-name: flip-down;
}

.animation-tear-off {
	animation-name: tear-off;
}

.animation-blink {
	animation-name: blink;
}

.animation-paused {
	animation-play-state: paused;
}

.animation-running {
	animation-play-state: running;
}

.animation-speed-blink {
	animation-duration: var(--aegis-blink-speed, 200ms);
}

.animation-speed-fast {
	animation-duration: var(--aegis-fast-speed, 400ms);
}

.animation-speed-normal {
	animation-duration: var(--aegis-normal-speed, 600ms);
}

.animation-speed-slow {
	animation-duration: var(--aegis-slow-speed, 800ms);
}

.animation-speed-crawl {
	animation-duration: var(--aegis-crawl-speed, 1200ms);
}

.animation-infinite {
	animation-iteration-count: infinite;
}

.animation-alternate {
	animation-direction: alternate;
}

.animation-reverse {
	animation-direction: reverse;
}

.animation-alternate-reverse {
	animation-direction: alternate-reverse;
}

.animation-normal {
	animation-direction: normal;
}

.animation-fill-forwards {
	animation-fill-mode: forwards;
}

.animation-fill-backwards {
	animation-fill-mode: backwards;
}

.animation-fill-both {
	animation-fill-mode: both;
}

.animation-fill-none {
	animation-fill-mode: none;
}

.animation-linear {
	animation-timing-function: linear;
}

.animation-ease {
	animation-timing-function: ease;
}

.animation-ease-in {
	animation-timing-function: ease-in;
}

.animation-ease-out {
	animation-timing-function: ease-out;
}

.animation-ease-in-out {
	animation-timing-function: ease-in-out;
}

.animation-overshoot {
	animation-timing-function: cubic-bezier(.59,1.16,.83,1.11);
}

.animation-stagger > :nth-child(5n+1) {
	animation-delay: calc(1 * var(--aegis-animation-stagger, 200ms));
}

.animation-stagger > :nth-child(5n+2) {
	animation-delay: calc(2 * var(--aegis-animation-stagger, 200ms));
}

.animation-stagger > :nth-child(5n+3) {
	animation-delay: calc(3 * var(--aegis-animation-stagger, 200ms));
}

.animation-stagger > :nth-child(5n+4) {
	animation-delay: calc(4 * var(--aegis-animation-stagger, 200ms));
}

.animation-stagger > :nth-child(5n+5) {
	animation-delay: calc(5 * var(--aegis-animation-stagger, 200ms));
}`;


export const keyframes = css`@keyframes trampoline {
	from {
		transform: scaleY(.85);
		filter: drop-shadow(0 0.3em 0.1em rgba(0,0,0,0.7));
	}

	to {
		filter: drop-shadow(0 0.7em 0.3em rgba(0,0,0,0.7));
		transform: translateY(-1.2em);
	}
}

@keyframes fade-in {
	from {
		opacity: 0;
	}
}

@keyframes fade-out {
	to {
		opacity: 0;
	}
}

@keyframes shrink {
	to {
		transform: scale(0);
	}
}

@keyframes grow {
	from {
		transform: scale(0);
	}
}

@keyframes fly-in {
	from {
		transform: translate(100vw, -3vh) scaleX(0.1) skew(-20deg);
	}
}

@keyframes flip-down {
	from {
		transform: rotateX(-90deg);
	}
}

@keyframes tear-off {
	40% {
		transform: rotateZ(30deg) rotateX(40deg) skew(-20deg);
	}

	99% {
		transform: rotateZ(40deg)  translate(-30vw, 120vh) skew(20deg);
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes slide {
	from {
		left: 100%;
	}

	to {
		left: 0;
	}
}

@keyframes slide-up {
	from {
		top: 100%;
	}

	to {
		top: 0%;
	}
}

@keyframes progress {
	to {
		background-position: right;
	}
}

@keyframes hanger {
	from {
		transform: rotateX(-90deg);
		transform-origin: center -40%;
	}
}

@keyframes door {
	from {
		transform: rotateY(90deg);
	}
}

@keyframes sidekick {
	from {
		left: 100%;
		transform: rotate(270deg) scale(0);
	}
}

@keyframes cube {
	from {
		left: 100%;
		transform: matrix(0.133,-0.489,-0.200,2.489,-100.667,80.000);
	}
}

@keyframes shine {
	0% {
		text-shadow: 4px 8px 2px #ddd;
	}

	25% {
		text-shadow: 4px -8px 2px #ddd;
	}

	50% {
		text-shadow: -2px -8px 2px #ddd;
	}

	75% {
		text-shadow: -2px 8px 2px #ddd;
	}

	100% {
		text-shadow: 4px 8px 2px #ddd;
	}
}

@keyframes blink {
	from {
		opacity: 0;
	}
}`;
