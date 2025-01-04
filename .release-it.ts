import type {Config} from 'release-it';

export default {
    git: {
        requireBranch: 'master',
        commit: true,
        commitMessage: 'chore: release v${version}',
        commitArgs: ['-S'],
        tag: true,
        tagName: 'v${version}',
        tagArgs: ['-s'],
        push: true,
    },
    github: {
        release: true,
        releaseName: 'v${version}',
    },
    npm: {
        publish: false,
    },
    hooks: {
        'before:init': 'bun run prepack',
    },
    plugins: {
        '@release-it/bumper': {
            out: {
                file: 'jsr.json',
                path: 'version',
            },
        },
    },
} satisfies Config;
