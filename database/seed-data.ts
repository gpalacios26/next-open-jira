interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    createdAt: number;
    status: string;
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: Proident dolor duis elit sunt qui dolor laborum veniam ea laboris qui consequat.',
            createdAt: Date.now(),
            status: 'pending',
        },
        {
            description: 'En-Progreso Veniam in cupidatat adipisicing Lorem sunt est est ex cillum laboris fugiat officia fugiat.',
            createdAt: Date.now() - 1000000,
            status: 'in-progress',
        },
        {
            description: 'Terminadas: Commodo veniam aliqua tempor officia officia non laborum.',
            createdAt: Date.now() - 100000,
            status: 'finished',
        },
    ]
}