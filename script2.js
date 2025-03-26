document.addEventListener('DOMContentLoaded', function() {
    // Navigation between sections
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            
            // Update active nav item
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('visible');
            });
            
            // Show selected section
            document.getElementById(sectionId).classList.add('visible');
            
            // Smooth scroll to section
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Modal functionality
    const modal = document.getElementById('partModal');
    const closeModal = document.querySelector('.close-modal');
    const partCards = document.querySelectorAll('.part-card');
    
    // Part data - in a real app this would come from a database
    const partsData = {
        // Engine parts
        'engine-block': {
            name: 'Engine Block',
            desc: 'The engine block is the foundation of the engine, typically made from cast iron or aluminum. It houses the cylinders and other components, providing structure and cooling passages for the engine.',
            image: './block.jpg',
            specs: {
                'Material': 'Cast iron or aluminum',
                'Weight': 'Varies by engine size',
                'Compatibility': 'Engine specific',
                'Warehouse Location': 'Aisle 3, Shelf B2',
                'Stock Count': '42 units'
            }
        },
        'cylinder-head': {
            name: 'Cylinder Head',
            desc: 'The cylinder head sits atop the engine block, sealing the top of the cylinders. It contains the combustion chambers, valves, and often the camshaft(s). Proper sealing is critical for engine performance.',
            image: '/head gasket.webp',
            specs: {
                'Material': 'Aluminum or cast iron',
                'Valve Configuration': 'Varies by engine',
                'Compatibility': 'Engine specific',
                'Warehouse Location': 'Aisle 3, Shelf C1',
                'Stock Count': '28 units'
            }
        },
        'piston': {
            name: 'Piston',
            desc: 'Pistons move up and down within the engine cylinders, transferring the force of combustion to the connecting rods and ultimately the crankshaft. They must withstand extreme heat and pressure.',
            image: '/pistons.jpg',
            specs: {
                'Material': 'Aluminum alloy',
                'Diameter': 'Varies by engine',
                'Compression Height': 'Engine specific',
                'Warehouse Location': 'Aisle 4, Shelf A3',
                'Stock Count': '156 units'
            }
        },
        // Add more parts data here...
        'shock-absorber': {
            name: 'Shock Absorber',
            desc: 'Shock absorbers dampen the oscillations of the suspension springs, providing a smoother ride and maintaining consistent tire contact with the road surface. They are critical for vehicle handling and comfort.',
            image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            specs: {
                'Type': 'Hydraulic or gas-charged',
                'Mounting Style': 'Vehicle specific',
                'Extended Length': 'Varies by application',
                'Warehouse Location': 'Aisle 7, Shelf B4',
                'Stock Count': '89 units'
            }
        },
        'headlamp': {
            name: 'Headlamp Assembly',
            desc: 'Modern headlamp assemblies include high and low beam functionality, often with LED or HID technology. They provide visibility and communicate the vehicle\'s presence to other drivers.',
            image: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            specs: {
                'Bulb Type': 'LED, HID, or halogen',
                'Compatibility': 'Make/model specific',
                'Voltage': '12V',
                'Warehouse Location': 'Aisle 9, Shelf A1',
                'Stock Count': '112 units'
            }
        }
        // Add more parts as needed...
    };
    
    // Show modal when part card is clicked
    partCards.forEach(card => {
        card.addEventListener('click', function() {
            const partId = this.getAttribute('data-part');
            const partData = partsData[partId];
            
            if (partData) {
                document.getElementById('modalPartImage').src = partData.image;
                document.getElementById('modalPartName').textContent = partData.name;
                document.getElementById('modalPartDesc').textContent = partData.desc;
                
                // Clear previous specs
                const specsList = document.getElementById('partSpecs');
                specsList.innerHTML = '';
                
                // Add new specs
                for (const [name, value] of Object.entries(partData.specs)) {
                    const specItem = document.createElement('li');
                    specItem.className = 'specs-item';
                    specItem.innerHTML = `
                        <span class="spec-name">${name}</span>
                        <span class="spec-value">${value}</span>
                    `;
                    specsList.appendChild(specItem);
                }
                
                // Show modal
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
});
