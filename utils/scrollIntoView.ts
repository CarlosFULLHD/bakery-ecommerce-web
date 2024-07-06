export function scrollIntoView(section: string): void {
                const element = document.getElementById(section);
              
                if (element) {
                  // Will scroll smoothly to the top of the next section
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }