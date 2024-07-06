export function monthsPassed(startMonth: string, startYear: number, endMonth: string, endYear: number): string {
                const monthMap: { [key: string]: number } = {
                  Jan: 1,
                  Feb: 2,
                  Mar: 3,
                  Apr: 4,
                  May: 5,
                  Jun: 6,
                  Jul: 7,
                  Aug: 8,
                  Sep: 9,
                  Oct: 10,
                  Nov: 11,
                  Dec: 12,
                };
              
                // Convert month names to numbers
                const startMonthNumber: number = monthMap[startMonth];
                const endMonthNumber: number = monthMap[endMonth];
              
                // Calculate the total number of months passed
                let totalMonthsPassed: number = (endYear - startYear) * 12 + (endMonthNumber - startMonthNumber + 1);
              
                // Calculate years and remaining months
                const years: number = Math.floor(totalMonthsPassed / 12);
                const remainingMonths: number = totalMonthsPassed % 12;
              
                // Construct the output string
                let result: string = '';
              
                if (years > 0) {
                  result += `${years} yr${years > 1 ? 's' : ''} `;
                }
              
                if (remainingMonths > 0) {
                  result += `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;
                }
              
                return result.trim();
              }