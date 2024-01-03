import React from "react";

export interface PaginationProps {
    total: number;
    limit: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    block: number;
    setBlock: React.Dispatch<React.SetStateAction<number>>;
}
