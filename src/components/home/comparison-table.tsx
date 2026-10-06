import React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function ComparisonTable() {
  const features = [
    { name: "FBR / Tier-1 integration", hulm: true, generic: true, offline: false, manual: false },
    { name: "Cloud Sync (Live)", hulm: true, generic: true, offline: false, manual: false },
    { name: "Local Server / Offline", hulm: false, generic: false, offline: true, manual: false },
    { name: "Works on Mobile Browsers", hulm: true, generic: true, offline: false, manual: false },
    { name: "Pricing & Updates", hulm: "SaaS / Free", generic: "SaaS / Paid", offline: "License", manual: "None" },
    { name: "Customer Management", hulm: true, generic: true, offline: false, manual: false },
    { name: "Data Security", hulm: true, generic: true, offline: "Local Only", manual: false }
  ];

  return (
    <Section data-reveal className="bg-white py-16 md:py-24 border-t border-border/30">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#167C70] mb-4">
            Hulm vs Competitors
          </div>
          <h2 className="h2 text-text mb-4 leading-tight">
            Why Pakistani Businesses Choose Hulm Over Every Other Option
          </h2>
        </div>

        <div className="overflow-x-auto pb-4">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="p-4 md:p-6 border-b border-border/50 text-text font-bold text-lg w-[28%]">
                  Features
                </th>
                <th className="p-4 md:p-6 border-b-2 border-primary bg-primary/5 rounded-t-xl text-primary font-bold text-lg text-center w-[18%]">
                  Hulm POS
                </th>
                <th className="p-4 md:p-6 border-b border-border/50 text-text font-semibold text-center w-[18%]">
                  Generic Software
                </th>
                <th className="p-4 md:p-6 border-b border-border/50 text-text font-semibold text-center w-[18%]">
                  Offline Software
                </th>
                <th className="p-4 md:p-6 border-b border-border/50 text-text font-semibold text-center w-[18%]">
                  Manual System
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, idx) => (
                <tr key={idx} className="hover:bg-background-muted/50 transition-colors">
                  <td className="p-4 md:p-6 border-b border-border/30 font-medium text-text">
                    {row.name}
                  </td>
                  
                  {/* Hulm POS Column */}
                  <td className={`p-4 md:p-6 text-center border-b border-border/30 bg-primary/5 ${idx === features.length - 1 ? 'rounded-b-xl' : ''}`}>
                    {typeof row.hulm === "boolean" ? (
                      row.hulm ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-500">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </div>
                      )
                    ) : (
                      <span className="font-bold text-primary">{row.hulm}</span>
                    )}
                  </td>
                  
                  {/* Generic Software Column */}
                  <td className="p-4 md:p-6 text-center border-b border-border/30">
                    {typeof row.generic === "boolean" ? (
                      row.generic ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-text-muted">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-400">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </div>
                      )
                    ) : (
                      <span className="font-medium text-text-muted">{row.generic}</span>
                    )}
                  </td>
                  
                  {/* Offline Software Column */}
                  <td className="p-4 md:p-6 text-center border-b border-border/30">
                    {typeof row.offline === "boolean" ? (
                      row.offline ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-text-muted">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-400">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </div>
                      )
                    ) : (
                      <span className="font-medium text-text-muted">{row.offline}</span>
                    )}
                  </td>
                  
                  {/* Manual System Column */}
                  <td className="p-4 md:p-6 text-center border-b border-border/30">
                    {typeof row.manual === "boolean" ? (
                      row.manual ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-text-muted">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-400">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </div>
                      )
                    ) : (
                      <span className="font-medium text-text-muted">{row.manual}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
